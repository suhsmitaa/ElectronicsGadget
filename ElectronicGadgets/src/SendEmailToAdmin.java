

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

/**
 * Servlet implementation class SendEmailToAdmin
 */
@WebServlet(name="SendEmailToAdmin", urlPatterns="/SendEmailToAdmin")
public class SendEmailToAdmin extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SendEmailToAdmin() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		

		response.setContentType("text/html");
		PrintWriter writer=response.getWriter();
		
		String get_name=request.getParameter("name");
		String get_email=request.getParameter("email");
		
		String get_subject=request.getParameter("subject");
		
		final String username = "pleasebeanemail543@gmail.com";
		final String password="inspira3100";
		
		Properties objProps=new Properties();
		
		/*objProps.put("mail.smtp.auth", "true");
		objProps.put("mail.debug", "false");
		objProps.put("mail.smtp.starttle.enable", "true");
		objProps.put("mail.smtp.ssl.enable", "true");
		objProps.put("mail.smtp.host","smtp.gmail.com" );
		objProps.put("mail.smtp.port", 587);*/
		
		
		
		objProps.put("mail.smtp.host","smtp.gmail.com" );
		objProps.put("mail.smtp.auth", "true");
		objProps.put("mail.debug", "false");
		objProps.put("mail.smtp.ssl.enable", "true");
		
		Session session = Session.getInstance(objProps, new javax.mail.Authenticator(){
			protected PasswordAuthentication getPasswordAuthentication()
			{
				return new PasswordAuthentication(username,password);
			}
		});
		
		
		try{
			
		
			
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(get_email));
			message.setRecipients(
			  Message.RecipientType.TO, InternetAddress.parse(username));
			message.setSubject(get_subject);
			 
			String msg = "Name: "+ get_name +"       "+"Email: "+get_email+"      "+"Subject: "+get_subject;
			
			 
			MimeBodyPart mimeBodyPart = new MimeBodyPart();
			mimeBodyPart.setContent(msg, "text/html");
			 
			Multipart multipart = new MimeMultipart();
			multipart.addBodyPart(mimeBodyPart);
			 
			message.setContent(multipart);
			
			JOptionPane.showMessageDialog(null, "EMAIL SENT SUCCESSFULLY");

			
			
		}catch(Exception e){
			
			System.out.println(e);
		}
	
	}
	

}
