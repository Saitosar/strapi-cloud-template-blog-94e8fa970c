// @ts-nocheck
'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
  async like(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::post.post').findOne({
      where: { id },
      select: ['likes'],
    });
    if (!entity) return ctx.notFound('Post not found');

    const updated = await strapi.db.query('api::post.post').update({
      where: { id },
      data: { likes: (entity.likes || 0) + 1 },
    });

    ctx.body = { id: updated.id, likes: updated.likes };
  },
}));
