import CancellationDetail from '../model/CancellationDetail';

const createCancellationDetail = async (payload: any) => {
  const cancellationDetail = await CancellationDetail.create(payload);
  return { message: 'Cancellation detail created sucessfully' };
};

export {createCancellationDetail};
