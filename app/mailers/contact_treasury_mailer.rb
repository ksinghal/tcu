class ContactTreasuryMailer < ActionMailer::Base
  def contact_treasury_email(sender_name, sender_email, message_subject, message_category, message_body)
    @sender_name = sender_name
    @sender_email = sender_email
    @message_subject = message_subject
    @message_category = message_category
    @message_body = message_body

    mail(to: 'tuftscommunityunion@gmail.com', subject: "[#{@message_category}] #{@message_subject}", from: sender_email, reply_to: sender_email)
  end
end
