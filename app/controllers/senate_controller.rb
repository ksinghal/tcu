require 'net/http'

class SenateController < ApplicationController
  before_filter :authenticate_admin!, :except => [:index, :members, :calendar, :minutes, :resolutions, :constitution, :bylaws, :committees, :archives]

  def index
  end
  def members
    @senate_member_seniors = SenateMembers.where("graduation_year = '2014'")
    @senate_member_juniors = SenateMembers.where("graduation_year = '2015'")
    @senate_member_sophomores = SenateMembers.where("graduation_year = '2016'")
    @senate_member_freshman = SenateMembers.where("graduation_year = '2017'")
    @senate_member_comm_reps = SenateMembers.where("graduation_year = 'cr'")
    @senate_member_trustee_reps = SenateMembers.where("graduation_year = 'tr'")
  end
  def calendar
    @calendar = Net::HTTP.get_response(URI.parse('https://www.google.com/calendar/embed?title=Tufts%20Community%20Union%20Calendar&showNav=0&showCalendars=0&height=600&wkst=1&bgcolor=%23ffffff&src=tuftscommunityunion%40gmail.com&color=%232952A3&ctz=America%2FNew_York')).body
  end
  def minutes
    @senate_minutes = SenateMinutes.all
  end
  def resolutions
    @senate_resolutions = SenateResolutions.all
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

  # resolutions resources
  def resolutions_new
    @senate_resolutions = SenateResolutions.new
  end
  def resolutions_create
    @senate_resolutions = SenateResolutions.create(params[:senate_resolutions])
    @senate_resolutions.date = @senate_minutes.date.to_date
    @senate_resolutions.save
    redirect_to senate_resolutions_path
  end
  def resolutions_edit
    @senate_resolutions = SenateResolutions.find(params[:id])
  end
  def resolutions_update
    @senate_resolutions = SenateResolutions.find(params[:id])
    if @senate_resolutions.update_attributes(params[:senate_resolutions])
      redirect_to senate_resolutions_path
    end
  end
  def resolutions_destroy
    @senate_resolutions = SenateResolutions.find(params[:id])
    @senate_resolutions.destroy
    redirect_to senate_resolutions_path
  end

end
