import { AppDataSource } from '../config/data-source';
import { BaseController } from '../controller';
import { User } from '../entities/User';
import { Sponsor } from '../entities/Sponsor';
import { Location } from '../entities/Location';
import { CreatedStore } from '../entities/CreatedStore';
import { Transaction } from '../entities/Transaction';
import { UserAppUsage } from '../entities/UserAppUsage';
import { UserLocation } from '../entities/UserLocation';
import { SponsoredAccountRequest } from '../entities/SponsoredAccountRequest';

export const userController = new BaseController(AppDataSource.getRepository(User));
export const sponsorController = new BaseController(AppDataSource.getRepository(Sponsor));
export const locationController = new BaseController(AppDataSource.getRepository(Location));
export const storeController = new BaseController(AppDataSource.getRepository(CreatedStore));
export const transactionController = new BaseController(AppDataSource.getRepository(Transaction));
export const userAppUsageController = new BaseController(AppDataSource.getRepository(UserAppUsage));
export const userLocationController = new BaseController(AppDataSource.getRepository(UserLocation));
export const sponsoredRequestController = new BaseController(AppDataSource.getRepository(SponsoredAccountRequest));
