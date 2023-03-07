package ifpe.br.Cognito;

import java.util.HashMap;
import java.util.Map;

import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProviderClientBuilder;
import com.amazonaws.services.cognitoidp.model.AdminInitiateAuthRequest;
import com.amazonaws.services.cognitoidp.model.AdminInitiateAuthResult;
import com.amazonaws.services.cognitoidp.model.AuthenticationResultType;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import ifpe.br.Cognito.model.Request;


@SuppressWarnings("rawtypes")
public class Login implements RequestHandler<Request, Map>{

	@Override 
	public Map<String, String> handleRequest(Request input, Context context) {
	
		AWSCognitoIdentityProvider client = AWSCognitoIdentityProviderClientBuilder.defaultClient();

	    Map<String, String> authParams = new HashMap<>();
	    authParams.put("USERNAME", input.getEmail());
	    authParams.put("PASSWORD", input.getPassword());

	    AdminInitiateAuthRequest authRequest = new AdminInitiateAuthRequest();
	    
	    // 1º opção de uso
//	            .withAuthFlow(AuthFlowType.ADMIN_NO_SRP_AUTH)
//	            .withUserPoolId("us-east-1_H9Myo7jJY")
//	            .withClientId("58ml8qm96ng6a3g7hvbfnj6n5f")
//	            .withAuthParameters(authParams);
	    
	    // 2º opção de uso
	    authRequest.setClientId("58ml8qm96ng6a3g7hvbfnj6n5f");
	    authRequest.setUserPoolId("us-east-1_H9Myo7jJY");
	    authRequest.setAuthFlow("ADMIN_NO_SRP_AUTH");
	    authRequest.setAuthParameters(authParams);
	    AdminInitiateAuthResult authResult = client.adminInitiateAuth(authRequest);
	    final AuthenticationResultType resultType = authResult.getAuthenticationResult();
	    return new HashMap<String, String>() {
		private static final long serialVersionUID = -6438930888708161470L;

		{
	        put("idToken", resultType.getIdToken());
	        put("accessToken", resultType.getAccessToken());
	        put("refreshToken", resultType.getRefreshToken());
	        put("message", "Successfully login");
	    }};

	}
	
   
}
