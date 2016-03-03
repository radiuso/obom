/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/poi              ->  index
 * POST    /api/poi              ->  create
 * GET     /api/poi/:id          ->  show
 * PUT     /api/poi/:id          ->  update
 * DELETE  /api/poi/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Poi from './poi.model';
import GLHandler from '../../components/sourceHandlers/grandLyonHandler.js';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Pois
export function index(req, res) {
  GLHandler.populate();
  Poi.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Poi from the DB
export function show(req, res) {
  Poi.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Poi in the DB
export function create(req, res) {
  Poi.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Poi in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Poi.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Poi from the DB
export function destroy(req, res) {
  Poi.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Add a new tag to poi
export function addTag(req, res) {
  console.log(req.params);
  Poi.findByIdAndUpdate(
    {_id : req.params.id},
    {$push: {tags: req.params.tag}},
    {new: true}
  )
  .then(handleEntityNotFound(res))
  .then(respondWithResult(res))
  .catch(handleError(res));
}

export function removeTag(req, res) {
  Poi.findByIdAndUpdate(
    {_id : req.params.id},
    {$pull: {tags: req.params.tag}},
    {new: true}
  )
  .then(handleEntityNotFound(res))
  .then(respondWithResult(res))
  .catch(handleError(res));
}
