import Fastify from 'fastify';


const fastify = Fastify({ logger: true });

fastify.listen({port: 4000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
    fastify.log.info(`Server listening on ${address}`);
});
