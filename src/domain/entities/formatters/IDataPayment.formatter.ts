/**
 * K : Data Input
 * T : Data Output
 */
export interface IDataPaymentFormatter<K,T>{
    data:K;
    getData():T;
}