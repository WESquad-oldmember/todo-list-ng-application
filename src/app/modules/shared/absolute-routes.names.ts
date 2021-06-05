import { coreRoutesNames } from './../core/core-routes.names';
import { mainRoutesNames } from './../main/main-routes.names';

export const absoluteRoutesNames = {
    ABOUT: coreRoutesNames.MAIN + '/' + mainRoutesNames.ABOUT,
    HOME: coreRoutesNames.MAIN + '/' + mainRoutesNames.HOME,
};
