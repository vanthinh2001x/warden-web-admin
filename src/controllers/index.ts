import { appConfig } from '@config';
import { ClusterHttpController } from '@LocationOps/controller/http/ClusterHttpController';
import { CountryRegionHttpController } from '@LocationOps/controller/http/CountryRegionHttpController';
import { CountrySubRegionHttpController } from '@LocationOps/controller/http/CountrySubRegionHttpController';
import { LocationHttpController } from '@LocationOps/controller/http/LocationHttpController';
import { RotaCoverageHttpController } from '@LocationOps/controller/http/RotaCoverageHttpController';
import { LeaveDayHttpController } from '@WardenOps/controller/http/LeaveDayHttpController';
import { RotaHttpController } from '@WardenOps/controller/http/RotaHttpController';
import { WardenHttpController } from '@WardenOps/controller/http/WardenHttpController';
import axiosInstant from 'src/helpers/axiosHelper';
import { RotaTemplateHttpController } from './../submodules/warden-ops-base-model/warden-ops-model/controller/http/RotaTemplateHttpController';

export const locationController = new LocationHttpController(appConfig.gateway.serviceUrl, axiosInstant);
export const regionController = new CountryRegionHttpController(appConfig.gateway.serviceUrl, axiosInstant);
export const clusterController = new ClusterHttpController(appConfig.gateway.serviceUrl, axiosInstant);
export const subRegionController = new CountrySubRegionHttpController(appConfig.gateway.serviceUrl, axiosInstant);
export const wardenController = new WardenHttpController(appConfig.gateway.serviceUrl, axiosInstant);
export const rotaCoverageController = new RotaCoverageHttpController(appConfig.gateway.serviceUrl, axiosInstant);
export const rotaController = new RotaHttpController(appConfig.gateway.serviceUrl, axiosInstant);
export const rotaTemplateController = new RotaTemplateHttpController(appConfig.gateway.serviceUrl, axiosInstant);
export const leaveDayController = new LeaveDayHttpController(appConfig.gateway.serviceUrl, axiosInstant);
