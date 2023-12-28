package com.clothingshop.backend.user;

// this is overkill for one user, but for now well do it like this
public class AdminRepository {
    
    private Admin admin;

    public AdminRepository() {
        this.admin = new Admin(1,"CaroSure75", "Carolina", "Segura", "asterix", true);
    }

    public Admin getAdmin() {
        return admin;
    }

    public void updateAdmin(Admin updateAdmin) {
        this.admin = updateAdmin;
    }
}
