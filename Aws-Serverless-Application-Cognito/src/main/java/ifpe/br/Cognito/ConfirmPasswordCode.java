package ifpe.br.Cognito;

import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProviderClientBuilder;
import com.amazonaws.services.cognitoidp.model.ConfirmForgotPasswordRequest;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import ifpe.br.Cognito.model.Request;
import ifpe.br.Cognito.model.Response;

public class ConfirmPasswordCode implements RequestHandler<Request, Response>{
	
	
	@Override
	public Response handleRequest(Request input, Context context) {
		AWSCognitoIdentityProvider client = AWSCognitoIdentityProviderClientBuilder.defaultClient();
		ConfirmForgotPasswordRequest request = new ConfirmForgotPasswordRequest().withClientId("58ml8qm96ng6a3g7hvbfnj6n5f")
												.withUsername(input.getEmail())
												.withConfirmationCode(input.getCode())
	               								.withPassword(input.getPassword());
		
		client.confirmForgotPassword(request);
		Response response = new Response();
		response.setMessage("Modificado com sucesso");
		
		return response;
	}
}
