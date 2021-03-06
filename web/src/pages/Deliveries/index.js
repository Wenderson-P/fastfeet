import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Container, Table, Deliveryman, Avatar, Division } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import SearchBar from '~/components/SearchBar';
import AddButton from '~/components/AddButton';
import StatusBadge from '~/components/StatusBadge';
import ActionMenu from '~/components/ActionMenu';
import DeliveryViewModal from '~/components/DeliveryViewModal';
import Pagination from '~/components/Pagination';
import EmpyState from '~/components/EmptyState';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [delivery, setDelivery] = useState();
  const [hideModal, setHideModal] = useState(true);
  const [searchProduct, setSearchProduct] = useState('');
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(
        `delivery?q=${searchProduct}&page=${actualPage}`
      );
      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [searchProduct, actualPage]);

  function showModal(delivery_id) {
    const deliveryFiltered = deliveries.filter(item => item.id === delivery_id);
    setDelivery(deliveryFiltered[0]);
    setHideModal(!hideModal);
  }

  async function handleDelete(id) {
    try {
      if (window.confirm(`Você deseja excluir a entrega ${id}?`)) {
        await api.delete(`/delivery/${id}`);
        history.go(0);
      }
    } catch (error) {
      toast.error('Não foi possivel excluir esta entrega', {
        autoClose: 4000,
      });
    }
  }

  function handleEdit(delivery) {
    if (delivery.end_date === null && delivery.canceled_at === null) {
      history.push('/deliveries/edit-delivery', {
        data: delivery,
      });
    } else {
      toast.error('A entrega já foi finalizada');
    }
  }

  function closeModal() {
    setHideModal(!hideModal);
  }

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
      <Division>
        <SearchBar
          placeholder="Buscar por encomendas"
          search={setSearchProduct}
        />
        <AddButton url="/deliveries/add-delivery" />
      </Division>
      {delivery && (
        <DeliveryViewModal
          recipient={delivery.recipient}
          startDate={delivery.start_date}
          endDate={delivery.end_date}
          signature={delivery.signature}
          hide={hideModal}
          closeModal={closeModal}
        />
      )}
      {deliveries.length !== 0 ? (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map(delivery => (
              <tr key={delivery.id}>
                <td>#{delivery.id}</td>
                <td>{delivery.recipient.name}</td>
                <Deliveryman>
                  <Avatar
                    src={
                      delivery.deliveryman.avatar
                        ? delivery.deliveryman.avatar.url
                        : `https://ui-avatars.com/api/?name=${delivery.deliveryman.name}&background=8171E7&color=fff`
                    }
                    alt="Foto do entregador"
                  />
                  {delivery.deliveryman.name}
                </Deliveryman>
                <td>{delivery.recipient.city}</td>
                <td>{delivery.recipient.state}</td>
                <StatusBadge
                  start_date={delivery.start_date}
                  end_date={delivery.end_date}
                  canceled_at={delivery.canceled_at}
                />
                <td>
                  <ActionMenu
                    visualize
                    viewAction={() => showModal(delivery.id)}
                    edit
                    editAction={() => handleEdit(delivery)}
                    erase
                    eraseAction={() => handleDelete(delivery.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
          <EmpyState />
        )}
      <Pagination actualPage={actualPage} changePage={setActualPage} />
    </Container>
  );
}
