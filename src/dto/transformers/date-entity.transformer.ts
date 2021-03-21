import * as moment from "moment";

export function dateEntityTransformer(value: any): string {
    return value?.date ? moment(value?.date).format('YYYY-MM-DD') : null;
}
