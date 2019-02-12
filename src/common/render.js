import Util from "./util";
import MathUtil from "./mathUtil";

export default {
    dateRender: (h, params) => {
        var row = params.row;
        var column = params.column;
        if (!row[column.key]) {
            return '-';
        }
        return Util.formatDate.format(new Date(row[column.key]));
    },
    dateTimeRender: (h, params) => {
        var row = params.row;
        var column = params.column;
        if (!row[column.key]) {
            return '-';
        }
        return Util.formatDate.format(new Date(row[params.column.key]), 'yyyy-MM-dd hh:mm:ss');
    },
    dateTimeRenderTime: (time) => {
        if (!time) {
            return '-';
        }
        return Util.formatDate.format(new Date(time), 'yyyy-MM-dd hh:mm:ss');
    },
    multiplyRender: (a, b, digits, op) => {
        return MathUtil.operationDate.opFormat(a, b, digits, op);
    }
};
