class PhoneService {
  async confirmRequest(user) {
    console.log(`Send confirm request for user with id: ${user.id}`);
  }
}

export const phoneService = new PhoneService();
