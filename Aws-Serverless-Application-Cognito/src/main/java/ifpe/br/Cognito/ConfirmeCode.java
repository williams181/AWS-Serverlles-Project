package ifpe.br.Cognito;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProviderClientBuilder;
import com.amazonaws.services.cognitoidp.model.ConfirmSignUpRequest;
import com.amazonaws.services.cognitoidp.model.ConfirmSignUpResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import ifpe.br.Cognito.model.Request;
import ifpe.br.Cognito.model.Response;

public class ConfirmeCode implements RequestHandler<Request, Response>{

	@Override
	public Response handleRequest(Request input, Context context) {
		this.confirmSignUp(input.getEmail(), input.getCode());
		Response response = new Response();
		response.setMessage("Verificado com sucesso");
		
		return response;
	}

	
	private AWSCognitoIdentityProvider createCognitoClient() {
	    AWSCredentials cred = new BasicAWSCredentials("ASIASMVYUWZ23AVQTT5O", "5LGGirq1N7hYjNr9G1FvWc6iGccLc27zow5AECc6");
	    AWSCredentialsProvider credProvider = new AWSStaticCredentialsProvider(cred);
	    return AWSCognitoIdentityProviderClientBuilder.standard()
	            .withCredentials(credProvider)
	            .withRegion("us-east-1")
	            .build();
	}
	public ConfirmSignUpResult confirmSignUp(String email, String confirmationCode) {
	    ConfirmSignUpRequest confirmSignUpRequest = new                 
	    ConfirmSignUpRequest().withClientId("58ml8qm96ng6a3g7hvbfnj6n5f").withUsername(email).withConfirmationCode(confirmationCode);
	    return this.createCognitoClient().confirmSignUp(confirmSignUpRequest);
	}
	
	
}
	
