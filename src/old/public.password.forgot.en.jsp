<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page pageEncoding="UTF-8"%>
<div id="root">
	<div class="css-4zornj">
		<%
			String theme = "";
			if (request.getSession().getAttribute("theme") != null) {
				theme = request.getSession().getAttribute("theme").toString();
			}
		%>
		<c:choose>
			<c:when test='<%=theme.equals("dark")%>'>
				<img alt="backgroundblack" src="/resources/images/spv/backgroundblack.svg"
			</c:when>
			<c:otherwise>
				<img alt="background-image" src="/resources/images/background-image.png"
			</c:otherwise>
		</c:choose>
			class="chakra-image css-u7aauf">
		<div class="css-3lbbee">
			<div>
				<img alt="callback" src="/resources/images/callback.svg"
					 class="css-1238bnjk" id="roll-back">
			</div>
			<div class="css-1ak5njr">
				<div class="css-12wxjww">
					<p class="chakra-text css-edyxus" id="title">FORGOT PASSWORD</p>
<%--					<p class="chakra-text css-1cd9221">Vui lòng nhập các thông tin dưới đây</p>--%>
				</div>
				<div id="divReset" class="css-swgekp" style="width: 100%">
					<form autocomplete="off">
                        <p class="chakra-text css-1cd9221">Please enter the information below</p>

						<div id="forgot-pass" class="css-4s10fr">
							<div role="group" class="chakra-form-control css-1kxonj9" id="divUsername">
								<label id="field-:r0:-label" for="field-:r0:"
									   class="chakra-form__label css-6y8ftb">Username ${forgotPassByIdentity != null ? "or IdentityCard" : ""}</label>
								<%--								<p style="font-size:11px">Nếu dùng email hoặc số phone đăng nhập thì không cần nhập trường này</p>--%>
								<div class="chakra-input__group css-4302v8">
									<input type="text" placeholder="Enter the username ${forgotPassByIdentity != null ? "or IdentityCard" : ""}"
										   id="username" class="chakra-input css-cdzpm6">
								</div>
							</div>
							
							<div role="group" class="chakra-form-control css-1kxonj9" id="divEmail">
								<label id="field-:r0:-label" for="field-:r0:"
									class="chakra-form__label css-6y8ftb">Phone number or Email address</label>
								<div class="chakra-input__group css-4302v8">
									<input type="text" placeholder="Phone number or Email address"
										id="email" class="chakra-input css-cdzpm6">
								</div>
							</div>
						</div>


						<div id="forgot-pass-identity" class="css-4s10fr">
							<div role="group" class="chakra-form-control css-1kxonj9" id="divIdentityCard">
								<label id="field-:r0:-label" for="field-:r0:"
									   class="chakra-form__label css-6y8ftb">Số CMND/CCCD</label>
								<div class="chakra-input__group css-4302v8">
									<input type="text" placeholder="Số CMND/CCCD"
										   id="identityCard" class="chakra-input css-cdzpm6">
								</div>
							</div>
						</div>

						<div id = "forgot_password_notify" class='css-1cmlw0u1'></div>
						<div id="notice-reset-pass" style="margin-bottom: -60px" class="css-1cmlw0u">
							<button type="button" class="chakra-button css-esepcw" id="btn-exit-forgot-pass">CANCEL</button>
							<button type="button" class="css-1esepcw" id="btn-reset-pass">
								<span>CONFIRM</span>
									<img id="loading1" class="css-1w6qo8v" src="/resources/images/loading.png">
							</button>
						</div>
					</form>
				</div>
				<div>
					<p style="margin-top: 90px" class="chakra-text css-1ph2spl">
					</p>
				</div>
			</div>
		</div>

	</div>
	<span></span>
</div>
