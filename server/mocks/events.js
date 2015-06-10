module.exports = function(app) {
  var express = require('express');
  var eventsRouter = express.Router();

  var EVENTS = [
    {
    id: 1,
    title: 'Антон Беляев',
    review: 'Пполный текст описания сего мероприяния',
    cover: 'http://ru.hellomagazine.com/images/2014/jan/dasha/bel28012014-4.jpg',
    location: 'Фетисов Арена',
    promoter: '',
    age: '18',
    visible: true,
    special: true,
    date: '12 сентября',
    created_at: ''
  },
  {
    id: 2,
    title: 'Полина Гагарина',
    review: 'Пполный текст описания сего мероприяния',
    cover: '',
    location: 'Фетисов Арена',
    promoter: 'Чистое небо',
    age: '16',
    visible: true,
    special: false,
    date: '12 сентября',
    created_at: ''
  },
  ];

  eventsRouter.get('/', function(req, res) {
    res.send({
      'events': EVENTS
    });
  });

  eventsRouter.post('/', function(req, res) {
    res.send({
      'events': {
        id: 1
      }
    });
  });

  eventsRouter.get('/:id', function(req, res) {
    res.send({
      'events': {
        id: req.params.id
      }
    });
  });

  eventsRouter.put('/:id', function(req, res) {
    res.send({
      'events': {
        id: req.params.id
      }
    });
  });

  eventsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/events', eventsRouter);
};
