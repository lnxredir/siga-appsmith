export default {
  checkRole: () => {
    const user = appsmith.store.user; // Get user from store
    const selectedSchoolId = appsmith.store.selectedSchoolId; // Get selected school

    // If the user is not logged in
    if (!user) {
      showAlert("Please log in to access this page.", "error");
      navigateTo("LoginPage");
      return false;
    }

    // Admin users can bypass the school requirement
    if (user.role === "admin") {
      return true; // Admin can access without selecting a school
    }

    // Non-admin users must have a valid school selected
    if (!selectedSchoolId) {
      showAlert("Please select a school to access this page.", "error");
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

    // Ensure that the role matches
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

    // If the user is not logged in
    if (!user) {
      showAlert("Please log in to access this page.", "error");
      navigateTo("LoginPage");
      return false;
    }

    // Admin users can bypass the school requirement
    if (user.role === "admin") {
      return true; // Admin can access without selecting a school
    }

    // Non-admin users must have a valid school selected
    if (!selectedSchoolId) {
      showAlert("Please select a school to access this page.", "error");
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

    // Ensure that the role matches
    if (user.role !== requiredRole) {
      showAlert("You do not have permission to access this page.", "error");
      navigateTo("LoginPage");
      return false;
    }

    return true; // User is authorized
  },
};
