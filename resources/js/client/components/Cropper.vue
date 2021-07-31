<template>
    <div>
    <div v-if="showingModal" class="contentt">
      <section class="cropper-area">
        <div class="img-cropper">
          <vue-cropper
            ref="cropper"
            :aspect-ratio="16 / 9"
            :src="current"
            preview=".preview"
          />
        </div>
        <div class="actions text-center">
          <a
            href="#"
            role="button"
            @click.prevent="cropImagee"
          >
            Crop
          </a>
          <a
            href="#"
            role="button"
            @click.prevent="reset"
          >
            Reset
          </a>
        </div>
      </section>
    </div>
    <div class="attached" v-else>
        <img id="uimg" :src="`${srcimage}`"  class="img-full" :alt="'image'">
        <button type="button" class="camera-btn" onclick="document.getElementById('upload').click()">
            <i class="fa fa-camera"></i>
        </button>
        <input accept="image/*" v-on:change="onFileChange"  type="file" id="upload" name="file">
    </div>


    </div>


</template>

<script>
    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';
    export default {
        props: [
            'image',
        ],
        components: {
            VueCropper
        },
        data(){
            return {
                srcimage: this.image ? this.image : this.$baseUrl +'/images/student-pro-girl.png',
                current: '',
                cropImg: '',
                showingModal: false,
            }
        },
        mounted(){
            console.log(this.image);
        },
        methods: {
            cropImagee() {
                console.log('i am ere');
            // get image data for post processing, e.g. upload or setting image src
                this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
                this.srcimage =  this.cropImg;
                // document.getElementById('uimg').setAttribute('src', this.cropImg);
                this.showingModal = false;
                this.$emit('changed', this.cropImg)
            },
            reset() {
                this.$refs.cropper.reset();
                this.showingModal = false;

            },
            cropImage() {
            // get image data for post processing, e.g. upload or setting image src
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
            },
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                let this_ = this;
                if(files[0].size <=  5232794){
                    if (files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            // document.getElementById('uimg').setAttribute('src', e.target.result);
                            this_.current = e.target.result;
                            this_.showingModal = true;
                        }
                        reader.readAsDataURL(files[0]);
                    }
                }
                else{
                   this.$toastr.error('File size should be smaller than 5MB', "Error!");
                }
            },
        }
    }
</script>
<style>
.contentt {
  display: flex;
  justify-content: center;
}
.cropper-area {
  width: 614px;
}
.actions {
  margin-top: 1rem;
}
.actions a {
  display: inline-block;
  padding: 5px 15px;
  background: #0062CC;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
textarea {
  width: 100%;
  height: 100px;
}
.preview-area {
  width: 307px;
}
.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}
.preview-area p:last-of-type {
  margin-top: 1rem;
}
.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}
.crop-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
}
.cropped-image img {
  max-width: 100%;
}

.cropper-view-box {
	box-shadow: 0 0 0 1px #39f;
	border-radius: 50%;
	outline: 0;
}
.cropper-face {
	background-color:inherit !important;
}
.cropper-view-box {
	outline:inherit !important;
}

</style>
