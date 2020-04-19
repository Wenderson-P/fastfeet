import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../../src/app';

import truncate from '../../util/truncate';
import factory from '../../util/factories';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post(`/users`)
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should encrypt user password when new user created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });

  it('should not be able to register with duplicated email', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post(`/users`)
      .send(user);

    const response = await request(app)
      .post(`/users`)
      .send(user);
    expect(response.status).toBe(400);
  });

  it('should register and make user login', async () => {
    const user = await factory.attrs('Admin');

    await request(app)
      .post(`/users`)
      .send(user);

    const response = await request(app)
      .post(`/sessions`)
      .send(user);

    expect(response.body).toHaveProperty('token');
  });
});