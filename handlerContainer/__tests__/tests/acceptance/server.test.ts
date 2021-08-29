process.env.NODE_ENV = 'test';

import { get } from '../../../src/handler';
import expressRequestMock from 'express-request-mock';
import { randomGetEventWithDomain } from "../../helpers/helper";

describe('The handler application', () => {
  describe('when the request is successful', () => {
    let request: any;

    beforeEach(() => {
      request = randomGetEventWithDomain();
    })

    it('should return the proper response', async () => {
      const { res } = await expressRequestMock(get, request);
      expect(res.statusCode).toEqual(200);
    });
  });
});