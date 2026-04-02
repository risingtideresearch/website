import { person } from "./person";
import { event } from "./event";
import { partner } from "./partner";
import { program } from "./program";
import { home } from "./home";
import { personGroup } from "./personGroup";
import { activity } from "./activity";
import { resource } from "./resource";
import { resourceType } from "./resourceType";
import { update } from "./update";

export const schemaTypes = [
    home,
    activity,
    program,
    update,
    resource,
    resourceType,
    person,
    personGroup,
    partner,
    event,
]
