import {Types} from 'mongoose';
import {Schema, model} from 'mongoose';

/**
 * This file defines the properties stored in a Follower
 */

// Type definition for Follower on the backend
export type Follower = {
    // from follows to
    from: Types.ObjectId;
    to: Types.ObjectId;
};

const FollowerSchema = new Schema({
    // The user doing the following of "to"
    from: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },

    // the user that is followed by "from"
    to: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
});

const FollowerModel = model<Follower>('Follow', FollowerSchema);
export default FollowerModel;