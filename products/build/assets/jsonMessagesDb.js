"use strict";
module.exports = {
    db: {
        noRecords: {
            msg: 'No records found',
            message: 'No Records found',
            status: 404,
            success: false,
        },
        dbError: {
            msg: 'Error',
            message: 'Invalid data',
            success: false,
            status: 400,
        },
        successUpdate: {
            msg: 'success',
            message: 'Records updated with success',
            success: true,
            status: 200,
        },
        successInsert: {
            msg: 'success',
            message: 'Record inserted with success',
            success: true,
            status: 201,
        },
        successDelete: {
            msg: 'success',
            message: 'Records deleted with success',
            success: true,
            status: 200,
        },
    },
};
