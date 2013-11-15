class AddTitleToSenateMembers < ActiveRecord::Migration
  def change
    add_column :senate_members, :title, :string
  end
end
