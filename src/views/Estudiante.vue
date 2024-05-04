<template>
  <article class="profile">
    <div class="profile-image">
      <img src="../assets/perfile.jpeg" />
    </div>
    <h2 class="profile-username">Bernardo Duran</h2>
    <small class="profile-user-handle">@Bernardi</small>
      
  </article>
</template>

<script>
export default {
  name: 'ProfileComponent'
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

button,
input,
select,
textarea {
	font: inherit;
}

a {
	color: inherit;
}

.profile {
	display: flex;
	align-items: center;
	flex-direction: column;
  margin-top: 25rem;
	padding: 3rem;
	width: 90%;
	max-width: 300px;
	background-color: rgba(57, 47, 47, 0.305);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 1.13);
	border-radius: 16px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 3px solid transparent;
	background-clip: padding-box;
	text-align: center;
	color: #f1f3f3;
	background-image: linear-gradient(
		135deg,
		rgba(#752e7c, 0.35),
		rgba(#734a58, 0.1) 15%,
		#1b2028 20%,
		#1b2028 100%
	);
}

.profile-image {
	border-radius: 50%;
	overflow: hidden;
	width: 175px;
	height: 175px;
	position: relative;
}

.profile-image img {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
}

.profile-username {
	font-size: 1.5rem;
	font-weight: 600;
	margin-top: 1.5rem;
}

.profile-user-handle {
	color: #7d8396;
}

.profile-actions {
	margin-top: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.btn {
	border: 0;
	background-color: transparent;
	padding: 0;
	height: 46px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	line-height: 1;
	transition: 0.15s ease;
}

.btn--primary {
	border-radius: 99em;
	background-color: #3772ff;
	background-image: linear-gradient(135deg, #5587ff, #3772ff);
	color: #fff;
	padding: 0 1.375em;
}

.btn--icon {
	height: 46px;
	width: 46px;
	border-radius: 50%;
	border: 3px solid #343945;
	color: #7d8396;
}

.btn--icon i {
	font-size: 1.25em;
}

.profile-links {
	margin-top: 3.5rem;
}

.link {
	text-decoration: none;
	color: #7d8396;
	margin-left: 0.375rem;
	margin-right: 0.375rem;
}

.link i {
	font-size: 1.25em;
}

</style>