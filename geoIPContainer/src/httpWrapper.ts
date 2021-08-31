import axios, { AxiosInstance, AxiosResponse } from 'axios';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class HttpWrapper {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string, access_key: string) {
    this.instance = axios.create({
      baseURL,
      params: { access_key },
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);
}