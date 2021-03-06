/* eslint-disable prettier/prettier */
import { getCustomRepository }from 'typeorm';

import Transactionrepository from '../repositories/TransactionsRepository';

import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
   const transactionsRepository = getCustomRepository(Transactionrepository);

   const transaction = await transactionsRepository.findOne(id);

   if(!transaction) {
     throw new AppError('Transaction does not exist');
   }

   await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
