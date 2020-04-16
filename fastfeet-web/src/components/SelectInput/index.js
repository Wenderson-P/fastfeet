import React from 'react';
import Select from 'react-select';

export default function SelectInput({ options, valueSelected, defaultValue }) {
  return (
    <Select
      options={options}
      value={defaultValue}
      onChange={value => valueSelected(value)}
    />
  );
}
