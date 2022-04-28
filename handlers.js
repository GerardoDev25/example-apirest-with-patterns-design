const handlers = ({ axios }) => ({
  get: async (req, res) => {
    try {
      const { data } = await axios.get('/users');
      return res.send(data);
    } catch (error) {
      console.log(error);
      res.send('there is a error')
    }
  },
});

export default handlers;
