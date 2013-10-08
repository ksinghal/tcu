require 'net/http'

class SenateController < ApplicationController
  before_filter :authenticate_admin!, :except => [:index, :members, :calendar, :minutes, :resolutions, :constitution, :bylaws, :committees, :archives]

  def index
  end
  def members
    @senate_members = SenateMembers.all
  end
  def calendar
    @calendar = Net::HTTP.get_response(URI.parse('https://www.google.com/calendar/embed?title=Tufts%20Community%20Union%20Calendar&showNav=0&showCalendars=0&height=600&wkst=1&bgcolor=%23ffffff&src=tuftscommunityunion%40gmail.com&color=%232952A3&ctz=America%2FNew_York')).body
  end
  def minutes
    @senate_minutes = SenateMinutes.all
  end
  def resolutions
  end
  def constitution
  end
  def bylaws
  end
  def committees
  end
  def archives
  end

  # member resources
  def members_new
    @senate_member = SenateMembers.new
  end
  def members_create
    @senate_member = SenateMembers.create(params[:senate_members])
    redirect_to senate_members_path
  end
  def members_edit
    @senate_member = SenateMembers.find(params[:id])
  end
  def members_update
    @senate_member = SenateMembers.find(params[:id])
    if @senate_member.update_attributes(params[:senate_members])
      redirect_to senate_members_path
    end
  end
  def members_destroy
    @senate_member = SenateMembers.find(params[:id])
    @senate_member.destroy
    redirect_to senate_members_path
  end

  # minutes resources
  def minutes_new
    @senate_minutes = SenateMinutes.new
  end
  def minutes_create
    @senate_minutes = SenateMinutes.create(params[:senate_minutes])
    @senate_minutes.date = @senate_minutes.date.to_date
    @senate_minutes.save
    redirect_to senate_minutes_path
  end
  def minutes_edit
    @senate_minutes = SenateMinutes.find(params[:id])
  end
  def minutes_update
    @senate_minutes = SenateMinutes.find(params[:id])
    if @senate_minutes.update_attributes(params[:senate_minutes])
      redirect_to senate_minutes_path
    end
  end
  def minutes_destroy
    @senate_minutes = SenateMinutes.find(params[:id])
    @senate_minutes.destroy
    redirect_to senate_minutes_path
  end

end
