import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'documents.insert': function () {
    return Documents.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },

  'documents.remove': function (doc) {
    return Documents.remove(doc);
  },

  'documents.update': function (doc, newContent) {
    return Documents.update(doc._id, { $set: { content: newContent } });
  }
});

export const Documents = new Mongo.Collection('documents');
