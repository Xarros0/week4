import {Species} from '../../types/DBTypes';

// TODO: categoryResolver
const categoryData = [
  {
    id: '1',
    category_name: 'Mammal',
  },
];

export default {
  Species: {
    category: (parent: Species) => {
      const parentId = parent.category as unknown as string;
      const result = categoryData.find((cat) => cat.id === parentId);
      return result;
    },
  },
  Query: {
    categories: () => {
      return categoryData;
    },
  },
};
