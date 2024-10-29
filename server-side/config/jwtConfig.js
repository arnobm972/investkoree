import crypto from 'crypto'
import { model } from 'mongoose';


const secretkey =crypto.randomBytes(32).toString('hex');

export default {
    secretkey: secretkey
  };