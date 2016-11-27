package pamm.infrastructure.mail;

import play.libs.mailer.Email;
import play.libs.mailer.MailerClient;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class EmailService {

    private final MailerClient mailerClient;

    @Inject
    public EmailService(final MailerClient mailerClient) {
        this.mailerClient = mailerClient;
    }

    public void sendEmail(final String toAddress, final String subject, final String message) {

        final Email email = new Email();
        email.setSubject(subject);
        email.setFrom("do_not_reply@sicloud.atos.net");
        email.addTo(toAddress);
        email.setBodyHtml(message);

        mailerClient.send(email);
    }
}



