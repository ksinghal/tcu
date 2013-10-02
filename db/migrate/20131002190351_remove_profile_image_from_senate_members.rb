class RemoveProfileImageFromSenateMembers < ActiveRecord::Migration
  def up
    remove_attachment :senate_members, :profile_image
  end

  def down
    add_attachment :senate_members, :profile_image
  end
end
