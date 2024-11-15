<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script type="text/javascript">
    var httpReferer = "${httpReferer}";
    var vndaName = "${vndaName}";
    var vndaTrackerName = "${vndaTrackerName}";
</script>
<input type="hidden" id="url" value="${url}"/>
<%--<div id="snackbar-bound">--%>
<%--    <div id="snackbar">--%>
<%--        <img class="image-danger-apple" src="/resources/images/login/icon/icon-notice-danger.png">--%>
<%--        Để đăng nhập ID Apple, vui lòng chia sẻ địa chỉ email của bạn</div>--%>
<%--</div>--%>
<div id="root">
    <div id="redirect" style="display: none">${redirect}</div>
    <div class="css-4zornj">
        <img id="imgBackground"
                <%
                    String theme = "";
                    if (request.getSession().getAttribute("theme") != null) {
                        theme = request.getSession().getAttribute("theme").toString();
                    }
                %>
                <c:choose>
                    <c:when test='<%=theme != null && theme.equals("dark")%>'>
                        src="/resources/images/spv/backgroundblack.svg"
                    </c:when>
                    <c:otherwise>src="/resources/images/background-image.png"</c:otherwise>
                </c:choose>
             class="chakra-image css-u7aauf"
        />
        <div id="borderBackground1" class="css-3lbbee">
            <div id="borderBackground2" class="css-1faancu">
                <%--          <img id="imageSPV" src="/resources/images/welcome.svg" class="chakra-image css-0" />--%>
                <!-- <img id="imageSPV" src="${imageBackground}" class="chakra-image css-0"/> -->
                <c:choose>
                    <c:when test="${redirectType == 'hrpage'}">
                        <img id="imageSPV" src="/resources/images/spv/hrpage.png" class="chakra-image css-0"/>
                    </c:when>
                    <c:otherwise>
                        <img id="imageSPV" src="${imageBackground}" class="chakra-image css-0"/>
                    </c:otherwise>
                </c:choose>
            </div>
            <div id="backgroundform" class="flexfix css-17h1824">
                <div class="css-12wxjww">
                    <c:choose>
                    <c:when test="${redirectType == 'elearning' || redirectType == 'ilead'}">
                        <img alt="vndirect"
                             id="imgLogo"
                             src="/resources/images/spv/logo/ipam.png"
                    </c:when>
                    <c:when test="${redirectType == 'hrpage'}">
                        <img alt="ipam"
                             id="imgLogo"
                             src="/resources/images/spv/logo/hrpage.png"
                    </c:when>
                    <c:when test="${redirectType == 'mydgo'}">
                        <img alt="ipam"
                             id="imgLogo"
                             src="/resources/images/spv/logo/mydgo.png"
                    </c:when>
                    <c:otherwise>
                    <img alt="ivnd"
                         id="imgLogo"
                         src="/resources/images/logo_IPA.svg"
                    </c:otherwise>
                    </c:choose>
                         class="chakra-image css-248w6w"
                    />
                    <p id="titleSPV" class="chakra-text css-uhee5o">${brand}</p>
                </div>
                <c:if test="${redirectType == 'propfit' || redirectType == 'stockbook' || redirectType == 'homefoodshop'}">
                    <div class="css-3011kk">
                        <img class="css-3011kk1" src="/resources/images/login/icon/homefood.svg">
                        <img class="css-3011kk1" src="/resources/images/login/icon/stockbook.svg">
                        <c:choose>
                            <c:when test='<%=theme.equals("dark")%>'>
                                <img class="css-3011kk1" src="/resources/images/login/icon/propfit-dark.svg">
                            </c:when>
                            <c:otherwise>
                                <img class="css-3011kk1" src="/resources/images/login/icon/propfit-light.svg">
                            </c:otherwise>
                        </c:choose>
                    </div>
                </c:if>
                <div class="css-1shzhd3">
                    <div
                            role="group"
                            class="chakra-form-control css-1kxonj9"
                            id="divUserName"
                    >
                        <label
                                data-invalid=""
                                id="field-:r0:-label"
                                for="field-:r0:"
                                class="chakra-form__label css-onipz0"
                        >Tên đăng nhập</label
                        >
                        <div class="chakra-input__group css-4302v8">
                            <input
                                    type="text"
                                    placeholder="Tên đăng nhập"
                                    id="username"
                                    aria-invalid="true"
                                    class="chakra-input css-1clmms2"
                                    aria-describedby="field-:r0:-feedback"
                                    autocapitalize="none"
                            />
                        </div>
                        <input id="username-error" type="hidden"/>
                    </div>
                    <div
                            role="group"
                            class="chakra-form-control css-1kxonj9"
                            id="divPassword"
                    >
                        <label
                                id="field-:r1:-label"
                                for="field-:r1:"
                                class="chakra-form__label css-onipz0"
                        >Mật khẩu</label
                        >
                        <div class="chakra-input__group css-4302v8">
                            <input
                                    type="password"
                                    placeholder="Mật khẩu"
                                    id="password"
                                    autocomplete="off"
                                    class="chakra-input css-177lp38"
                            />
                            <div class="chakra-input__right-element css-1h6z7vk">
                                <i
                                        id="show-password"
                                        class="vnd-right-addon fa fa-eye vnd-text-orange"
                                        style="cursor: pointer"
                                >
                                </i>
                            </div>
                        </div>
                        <input id="password-error" type="hidden"/>
                    </div>
                </div>
                <div class="css-a65z9k">
                    <div id="forgotPassword" class="forgotPass css-1qxorxi">
                        <c:if test="${!officeAccount}"><a
                                type="button"
                                class="chakra-button css-obss8j"
                                href="${forgotPasswordLink}"
                                style="cursor: pointer"
                        >Quên mật khẩu</a
                        ></c:if>
                    </div>
                    <p id="error-login" class="chakra-text css-1hsks0f"><c:out value="${error}"></c:out></p>
                    <div class="css-2xph3x">
                        <button
                                type="button"
                                class="chakra-button css-1esepcw"
                                id="btn-login"
                        >
                            <img src="/resources/images/loading.png" class="css-1w6qo8v" id="loading">
                            ĐĂNG NHẬP
                        </button>
                        <c:if test="${!officeAccount && allowRegister}">
                            <a id="register"
                               type="button"
                               class="register chakra-button css-1nuzg3t"
                               href="${registerLink}"
                               style="cursor: pointer"
                            >ĐĂNG KÝ</a
                            > </c:if>
                    </div>
                </div>
                <c:if test="${redirectType == 'mydgo'}">
                    <div style="height: 5em"></div>
                    <div class="css-introduce">
                        <img id="imgIntroduce"
                             src="/resources/images/spv/imgIntroduce.png"
                             class="image-introduce "
                        />
                        <div class="text-introduce">Công ty Cổ phần Công nghệ IPAS là đơn vị cung cấp giải pháp nền tảng
                            cho VNDIRECT
                        </div>
                    </div>
                </c:if>
                <c:if test="${!officeAccount && !((facebook == 'facebook') && (google == 'google') && (apple == 'apple'))}">
                    <div class="oauth css-10vh7px">
                        <div class="css-e8oa2z"></div>
                        <div class="css-1jzncon">
                            <p class="chakra-text css-qqfgvy">Hoặc đăng nhập bằng</p>
                        </div>
                        <div class="css-e8oa2z"></div>
                    </div>
                    <div class="oauth css-1brldvs">
                        <c:if test="${!(google == 'google')}">
                            <a
                                    id="google-login"
                                    type="button"
                                    class="google chakra-button css-yf42p7"
                            >
                                <img
                                        src="/resources/images/login/icon/icongg.svg"
                                        class="chakra-image css-0"
                                />
                            </a>
                        </c:if>
                        <c:if test="${!(apple == 'apple')}">
                            <a
                                    id="apple-login"
                                    type="button"
                                    class="chakra-button css-yf42p7"
                                    style="cursor: pointer"
                            >
                                <img
                                        src="/resources/images/login/icon/iconapple.svg"
                                        class="chakra-image"
                                />
                            </a>
                        </c:if>
                            <%--          <button type="button" class="chakra-button css-yf42p7">--%>
                            <%--            <img--%>
                            <%--              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQXSURBVHgB1VpNWuJAEC3YuBzWbqY9weAJjCdQTzDMCcQTgCdQT6CeYPQExhOAJyBs3MIs3ci8l1SYxhEhXQ3G9331kYSku15X/1R1dUMiYTQaOfwkzWbzx2w2S3Dd8qRERmk0GsPX19cnXKd7e3uZREBDDIDyLSh+CsU7uG1BwTtVMIMMIVMoOvXed/ihtCl4/yBXovjuykIqiAgUSlB5j8qAxJUULZtKAFAWSXVJCpKC0HkIoUpE2KKo7AKXiRK49FvcCpTfYQNZCK3EeDw+zbJsgsr67FKyQbAO1DUiMYkJkLjQgtuyJdD6rJN1r/N+Y0VhHMAP6EYcwN2Y3WgdaP3XuHTQ4TCofhaCFhnQzPLJ0K42COrSdSFRoiRT6SMdE7+lZgCZm2VjpvnOyx30x2PIL6kfutQNOnY/fKucKXQFriU4c+oy4PznCxaBu9ED49uNLESRAN2GXIx1Yf4fpTXkC0BnVFolKZ/NLaLWOJcvAK4napXewh9bsgbXAFY8kUXXPgieVfKySovQ+0xls3iA9CFTFRNKq+Ayn8FyIiBxxHhANgdWVvpptxIPKXT/mV9tqVtxRZ5JYZWoYPd6fn7+ToskG+hWb0PcR8gJ5FCKCNFJJKB73b+8vBySSFvD0xjoSNH6E5WBPkshB/ps5ElH7GBI3aZpHvz52ADOSLMA6YoB0P2YziQt4nZ2dqxjxEkxI1VFBrkRG2iRVk5kd3d3LDb0JAwcM9apmN+3mhIHiVRHKoVFTNCoMRoRJ9URa4LJQSLTTe+KLME3iYicCAa7tdBMquNY4vhcjvXnRLCg7IsNj1IdpRNphRMSwcr4KPaVNpUwcA3h3oDFMty2faJFhtxBFxvuJHwabRu+FdV9SCIpA3qxgYqEes+mYE5TGGl+oxsOidjA7kEPoYp7YvIodCMiLyNfR7jhIGGLmg9a5UTW7yZ871AM0NzM/fzB27DRCPZ5thI9XcYf7LaJ/nJg0xID+RdoBePdrSv1gvvyRcCNROw6Xpf3cxeFOygIsE4/aZWvDO6gMBlU3s+JaOqMYooPtgFYIs9q+RuJC04jrHKmVtlaQqcqOCaYfPWtsezFrg6i2nUxnZTWT8nhxUt/INUFTHVQt6ofDdgXpSagLh8lepYGVszZ0XWpAxnqoDmbpQvoWslQXGZM/HxGMhSr9wXqbq9Khn4Y6vJD59w+ChmD0GCbCSDOnKwTs9Mf6hCtETlTaN57o12NVtDxMFmZYvNQ+QgHfvo8N0JPAK10I5HgHdCh8gwtzqpkzkIP1ThRQnpuhCd7hhIAhg8gcKAEhtpAqVSE9ZiTkyK3cpQXVpDiNg9JZX6L6gJLodfg9FwXPeKphhGmAzomIj7Kg2dSnMNi+OlkcS+gTPBMdZ+AZKMdPPsLn4jCZRqjU0cAAAAASUVORK5CYII="--%>
                            <%--              class="chakra-image css-0"--%>
                            <%--            />--%>
                            <%--          </button>--%>
                    </div>
                </c:if>
            </div>
        </div>
    </div>
    <span></span>
</div>

<script type="text/javascript">
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(
            /[?&]+([^=&]+)=([^&]*)/gi,
            function (m, key, value) {
                vars[key] = value;
            }
        );
        return vars;
    }

    function getUrlParam(parameter, defaultvalue) {
        var urlparameter = defaultvalue;
        let refer = getCookie("refer");
        if (refer !== "") {
            urlparameter = refer;
        }
        if (window.location.href.indexOf(parameter) > -1) {
            urlparameter = getUrlVars()[parameter];
        }

        return urlparameter;
    }
</script>

