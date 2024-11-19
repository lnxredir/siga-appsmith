export default {
  checkRole: () => {
    const user = appsmith.store.user; // Get user from store
    const selectedSchoolId = appsmith.store.selectedSchoolId; // Get selected school

    if (!user || !selectedSchoolId) {
      // Redirect to login if user or school is not selected
      showAlert("Please log in and select a school to access this page.", "error");
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
    };

    const requiredRole = roleToPageMap[currentPage];
    if (user.role !== requiredRole) {
      showAlert("You do not have permission to access this page.", "error");
      navigateTo("LoginPage");
      return false;
    }

    return true; // User is authorized
  },
};
export default {
  checkRole: () => {
    const user = appsmith.store.user; // Get user from store
    const selectedSchoolId = appsmith.store.selectedSchoolId; // Get selected school

    if (!user || !selectedSchoolId) {
      // Redirect to login if user or school is not selected
      showAlert("Please log in and select a school to access this page.", "error");
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
    };

    const requiredRole = roleToPageMap[currentPage];
    if (user.role !== requiredRole) {
      showAlert("You do not have permission to access this page.", "error");
      navigateTo("LoginPage");
      return false;
    }

    return true; // User is authorized
  },
};
