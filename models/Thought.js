const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Middleware to delete reactions when a thought is deleted
thoughtSchema.pre('remove', async function (next) {
  try {
    await this.model('Reaction').deleteMany({ thoughtId: this._id });
    next();
  } catch (err) {
    next(err);
  }
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
