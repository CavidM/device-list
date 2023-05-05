import cart from './cart';
import device from './device';
const { mergeSchemas } = require('graphql-tools');

const MergeSchema = mergeSchemas({
    schemas: [
        device,
        cart
    ],
});

export default MergeSchema;