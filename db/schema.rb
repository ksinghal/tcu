# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131005185424) do

  create_table "admins", :force => true do |t|
    t.string   "email",                                :default => "", :null => false
    t.string   "encrypted_password",                   :default => ""
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                        :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                                           :null => false
    t.datetime "updated_at",                                           :null => false
    t.string   "invitation_token",       :limit => 60
    t.datetime "invitation_sent_at"
    t.datetime "invitation_accepted_at"
    t.integer  "invitation_limit"
    t.integer  "invited_by_id"
    t.string   "invited_by_type"
  end

  add_index "admins", ["email"], :name => "index_admins_on_email", :unique => true
  add_index "admins", ["invitation_token"], :name => "index_admins_on_invitation_token", :unique => true
  add_index "admins", ["invited_by_id"], :name => "index_admins_on_invited_by_id"
  add_index "admins", ["reset_password_token"], :name => "index_admins_on_reset_password_token", :unique => true

  create_table "ecom_members", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "graduation_year"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

  create_table "judiciary_members", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "graduation_year"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

  create_table "senate_members", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "graduation_year"
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
    t.string   "profile_image_file_name"
    t.string   "profile_image_content_type"
    t.integer  "profile_image_file_size"
    t.datetime "profile_image_updated_at"
  end

  create_table "sliderimages", :force => true do |t|
    t.string   "link"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

  create_table "student_groups", :force => true do |t|
    t.integer  "council"
    t.string   "name"
    t.integer  "account_number"
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
    t.string   "budget_file_name"
    t.string   "budget_content_type"
    t.integer  "budget_file_size"
    t.datetime "budget_updated_at"
    t.string   "constitution_file_name"
    t.string   "constitution_content_type"
    t.integer  "constitution_file_size"
    t.datetime "constitution_updated_at"
  end

  create_table "treasury_members", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "graduation_year"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

end
