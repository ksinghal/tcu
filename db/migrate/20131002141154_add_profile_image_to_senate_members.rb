class AddProfileImageToSenateMembers < ActiveRecord::Migration
  def self.up
    add_attachment :senate_members, :profile_image
  end

  def self.down
    remove_attachment :senate_members, :profile_image
  end
end
