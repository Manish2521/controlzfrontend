import axios from 'axios';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'mongodb+srv://manishpokhriyal667:DeAuth%4099@erpgym24.aafqx.mongodb.net/userdata',
});

// User related API calls
export const userAPI = {
  // Get all users
  getUsers: async () => {
    try {
      const response = await api.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
  
  // Get user by ID
  getUserById: async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user ${userId}:`, error);
      throw error;
    }
  },
  
  // Create new user
  createUser: async (userData) => {
    try {
      const response = await api.post('/users', userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },
  
  // Update user
  updateUser: async (userId, userData) => {
    try {
      const response = await api.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user ${userId}:`, error);
      throw error;
    }
  },
  
  // Delete user
  deleteUser: async (userId) => {
    try {
      const response = await api.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user ${userId}:`, error);
      throw error;
    }
  }
};

// Membership related API calls
export const membershipAPI = {
  // Get all memberships
  getMemberships: async () => {
    try {
      const response = await api.get('/memberships');
      return response.data;
    } catch (error) {
      console.error('Error fetching memberships:', error);
      throw error;
    }
  },
  
  // Get membership by ID
  getMembershipById: async (membershipId) => {
    try {
      const response = await api.get(`/memberships/${membershipId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching membership ${membershipId}:`, error);
      throw error;
    }
  },
  
  // Create new membership
  createMembership: async (membershipData) => {
    try {
      const response = await api.post('/memberships', membershipData);
      return response.data;
    } catch (error) {
      console.error('Error creating membership:', error);
      throw error;
    }
  }
};

// Class related API calls
export const classAPI = {
  // Get all classes
  getClasses: async () => {
    try {
      const response = await api.get('/classes');
      return response.data;
    } catch (error) {
      console.error('Error fetching classes:', error);
      throw error;
    }
  },
  
  // Get class by ID
  getClassById: async (classId) => {
    try {
      const response = await api.get(`/classes/${classId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching class ${classId}:`, error);
      throw error;
    }
  }
};

// Trainer related API calls
export const trainerAPI = {
  // Get all trainers
  getTrainers: async () => {
    try {
      const response = await api.get('/trainers');
      return response.data;
    } catch (error) {
      console.error('Error fetching trainers:', error);
      throw error;
    }
  },
  
  // Get trainer by ID
  getTrainerById: async (trainerId) => {
    try {
      const response = await api.get(`/trainers/${trainerId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching trainer ${trainerId}:`, error);
      throw error;
    }
  }
};

export default api;