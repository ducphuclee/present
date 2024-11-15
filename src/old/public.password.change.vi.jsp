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
				<img src="/resources/images/spv/backgroundblack.svg"
					 class="chakra-image css-u7aauf">
			</c:when>
			<c:otherwise>
				<img src="/resources/images/background-image.png"
					 class="chakra-image css-u7aauf">
			</c:otherwise>
		</c:choose>
		<div class="css-3lbbee">
			<div class="css-6zd474">
				<div class="css-12wxjww">
					<p id="text-title" class="chakra-text css-edyxus">ĐỔI MẬT KHẨU</p>
					<p class="chakra-text css-1cd9221">Vui lòng nhập các thông tin
						dưới đây để <span id="returnLogout">đổi</span> mật khẩu &nbsp &nbsp &nbsp &nbsp</p>
				</div>
				<div class="css-swgekp">
					<div id="group-current-pass" role="group" class="chakra-form-control css-1kxonj9">
						<label id="field-:r2:-label" for="field-:r2:"
							class="chakra-form__label css-6y8ftb">Mật khẩu hiện tại</label>
						<div class="chakra-input__group css-4302v8" id="divOldPass">
							<input type="password" placeholder="Nhập mật khẩu hiện tại"
								id="oldPass" class="chakra-input css-1bhusbh">
							<div class="chakra-input__right-element css-1h6z7vk">
								<i id="showCurrentPass" class="vnd-right-addon fa fa-eye vnd-text-orange" style="cursor: pointer"></i>
							</div>
						</div>
					</div>
					<div id="group-new-pass" role="group" class="chakra-form-control css-1kxonj9">
						<label id="field-:r3:-label" for="field-:r3:"
							class="chakra-form__label css-6y8ftb">Mật khẩu mới</label>
						<div class="chakra-input__group css-4302v8" id="divNewPass">
							<input type="password" placeholder="Nhập mật khẩu mới"
								id="newPass" class="chakra-input css-1bhusbh">
							<div class="chakra-input__right-element css-1h6z7vk">
								<i id="showPass" class="vnd-right-addon fa fa-eye vnd-text-orange" style="cursor:pointer">
								</i>
							</div>
						</div>
						 <div id="divPopoverPass" class="d-none">
			                <div class="progress" style="min-width: 250px;">
			                    <img id="passstrength-progressbar" class="progress-bar"/>
			                </div>
			                <div id="passstrength" class="popover-pass" style="display: none">
			                        <ul style="font-size:12px; margin-left: 3px; margin-top: 5px; list-style-type: none">
			                            <li id="progressLength">
			                                <span class="rounded-circle"><i class="fa fa-exclamation-circle text-danger"
			                                                                aria-hidden="true"></i></span> 8-32 ký tự
			                            </li>
			                            <li id="progressUpperCase">
			                                <span class="rounded-circle"><i class="fa fa-exclamation-circle text-danger"
			                                                                aria-hidden="true"></i></span> Bao gồm chữ hoa
			                            </li>
			                            <li id="progressLowCase">
			                                <span class="rounded-circle"><i class="fa fa-exclamation-circle text-danger"
			                                                                aria-hidden="true"></i></span> Bao gồm chữ thường
			                            </li>
			                            <li id="progressDigital">
			                                <span class="rounded-circle"><i class="fa fa-exclamation-circle text-danger"
			                                                                aria-hidden="true"></i></span> Bao gồm chữ số
			                            </li>
			                        </ul>
			                </div>
			             </div>
						<!-- <div id="divNoticePopoverpass" class="d-none notice-popover-pass">
							<p>Mật khẩu phải có từ 8-32 ký tự; nên bao gồm cả chữ hoa,</p>
							<p>chữ thường và số.</p>
						</div> -->
					</div>
					<div role="group" class="chakra-form-control css-1kxonj9">
						<label id="field-:r4:-label" for="field-:r4:"
							class="chakra-form__label css-6y8ftb">Nhập lại mật khẩu
							mới</label>
						<div class="chakra-input__group css-4302v8" style="margin-bottom: 1rem"  id="divConfirmPass">
							<input type="password" placeholder="Nhập lại mật khẩu mới"
								id="confirmPass" class="chakra-input css-1bhusbh">
							<div class="chakra-input__right-element css-1h6z7vk">
								<i id="showConfirmPass" class="vnd-right-addon fa fa-eye vnd-text-orange" style="cursor:pointer">
								</i>
							</div>
						</div>
					</div>
				</div>
				<div id="notice-change-pass" class="notice-change-pass"></div>
				<div style="flex-direction: row; margin-top: 30px" class="css-1cmlw0u">
					<c:choose>
						<c:when test='<%=theme.equals("dark")%>'>
							<button type="button" style="border: 1px solid #F7941D; border-radius: 5px; background-color: #272831; color: #F7941D; width: 50%" class="chakra-button css-1esepcw" id="btn-exit-change-pass">HỦY</button>
						</c:when>
						<c:otherwise>
							<button type="button" style="border: 1px solid #F7941D; border-radius: 5px; background-color: #FFFFFF; color: #F7941D; width: 50%" class="chakra-button css-1esepcw" id="btn-exit-change-pass">HỦY</button>
						</c:otherwise>
					</c:choose>
					<button type="button" style="width: 50%" class="chakra-button css-1esepcw" id="btn-change-pass">
						XÁC NHẬN
						<img id="loading" class="css-1w6qo8v" src="/resources/images/loading.png">
					</button>
				</div>
			</div>
		</div>
	</div>
	<span></span>
</div>