'use strict';

/**
 * order-transaction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-transaction.order-transaction');
