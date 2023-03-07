package ifpe.br.Cognito;



import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProviderClientBuilder;
import com.amazonaws.services.cognitoidp.model.ForgotPasswordRequest;
import com.amazonaws.services.cognitoidp.model.ForgotPasswordResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import ifpe.br.Cognito.model.Request;
import ifpe.br.Cognito.model.Response;

public class ForgotPassword implements RequestHandler<Request, Response>{
	
	@Override
	public Response handleRequest(Request input, Context context) {
		AWSCognitoIdentityProvider client = AWSCognitoIdentityProviderClientBuilder.defaultClient();
		ForgotPasswordRequest request = new ForgotPasswordRequest().withClientId("58ml8qm96ng6a3g7hvbfnj6n5f")
	               .withUsername(input.getEmail());
		
		ForgotPasswordResult result = client.forgotPassword(request);
		System.out.println(result);
		Response response = new Response();
		response.setMessage("Enviado com sucesso");
		
		return response;
	}
}
