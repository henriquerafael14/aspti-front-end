export default httpClient => ({
  login: async ({ nomeUsuarioEmail, senha }) => {
    // debbuger;
    const response = await httpClient.post("/autenticar", {
      nomeUsuarioEmail,
      senha,
    });

    let errors = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }
    console.log("response", response);
    return {
      data: response.data.data,
      errors,
    };
  },
});
