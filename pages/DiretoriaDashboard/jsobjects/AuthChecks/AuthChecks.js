export default {
  checkRole: () => {
    const user = appsmith.store.user; // Get user from store
    if (!user) {
      // Redirect to login if user is not logged in
      showAlert("Faça login para acessar essa página.", "error");
      navigateTo("LoginPage");
      return false;
    }

    // Check if the user has the correct role for the page
    const currentPage = appsmith.page.name; // Get the current page name
    const roleToPageMap = {
      AdminDashboard: "admin",
      DiretoriaDashboard: "diretoria",
      ProfessorDashboard: "professor",
      ResponsavelDashboard: "responsavel",
			AssistenteDashboard: "assistente",
    };

    const requiredRole = roleToPageMap[currentPage];
    if (user.role !== requiredRole) {
      showAlert("Você não tem autorizção para acessar essa página.", "error");
      navigateTo("LoginPage");
      return false;
    }
    return true; // User is authorized
  },
};
