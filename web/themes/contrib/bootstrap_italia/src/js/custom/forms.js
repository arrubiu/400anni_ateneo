$(function() {
  const inputSelector =
    'input[type="text"],' +
    'input[type="password"],' +
    'input[type="email"],' +
    'input[type="email"],' +
    'input[type="url"],' +
    'input[type="tel"],' +
    'input[type="number"],' +
    'input[type="search"],' +
    'textarea'

  const inputFileSelector = 'input[type="file"]'

  const handleLabelWidth = $input => {
    //const labelsForInput = $input.siblings('label:not(.active)')
    const labelsForInput = $("label[for='" + $input.attr('id') + "']:not(.active)")
    if (labelsForInput && labelsForInput.length) {
      let labelWidth =
        labelsForInput[0].offsetWidth > $input[0].offsetWidth - 20
          ? $input[0].offsetWidth
          : 'auto'
      $(labelsForInput[0]).css('width', labelWidth)
    }
  }

  $(document)
    .on('focus', inputSelector, e => {
      const $this = $(e.target)
      const labelSelector = "label[for='" + $this.attr('id') + "']"
      //$this.siblings('label, i').addClass('active')
      $(labelSelector).addClass('active')
      //const labelsForInput = $this.siblings('label')
      const labelsForInput = $(labelSelector)
      if (labelsForInput && labelsForInput.length) {
        $(labelsForInput[0]).css('width', 'auto')
      }
    })
    .on('blur', inputSelector, e => {
      const $this = $(e.target)
      const noValue = !$this.val()
      const noPlaceholder = !$this.attr('placeholder')

      if (noValue && noPlaceholder) {
        //$this.siblings('label, i').removeClass('active')
        $("label[for='" + $this.attr('id') + "']").removeClass('active')
        handleLabelWidth($this)
      }
    })
    .on('change', inputSelector, e => {
      const $this = $(e.target)
      updateTextFields($this)
      validateField($this)
    })
    .on('blur', inputFileSelector, e => {
      const $this = $(e.target)
      //$this.siblings('label').addClass('active')
      $("label[for='" + $this.attr('id') + "']").addClass('active')
    })
    .on('change', inputFileSelector, e => {
      const $this = $(e.target)
      var numFiles = e.currentTarget.files.length
      var nomiFiles = ''
      var multi = ''
      for (i = 0; i < numFiles; i++) {
        fileSize = parseInt(e.currentTarget.files[i].size, 10) / 1024
        filesize = Math.round(fileSize)
        nomiFiles =
          nomiFiles + e.currentTarget.files[i].name + ' (' + filesize + 'kb); '
      }
      if (numFiles > 1) {
        multi = numFiles + ' file da caricare: '
      }
      //$this.siblings('.form-file-name').text(multi + nomiFiles)
      $("label[for='" + $this.attr('id') + "']label[class='form-file-name']").text(multi + nomiFiles)
    })

  const updateTextFields = $input => {
    //const $labelAndIcon = $input.siblings('label, i')
    const $labelAndIcon = $("label[for='" + $input.attr('id') + "']")
    const hasValue = $input.val().length
    const hasPlaceholder = !!$input.attr('placeholder')
    if (hasValue || hasPlaceholder) {
      $labelAndIcon.addClass('active')
    } else {
      $labelAndIcon.removeClass('active')
    }
  }

  const validateField = $input => {
    if ($input.hasClass('validate')) {
      const value = $input.val()
      const noValue = !value.length
      const isValid = !$input[0].validity.badInput
      if (noValue && isValid) {
        $input.removeClass('valid').removeClass('invalid')
      } else {
        const valid = $input.is(':valid')
        const length = Number($input.attr('length')) || 0
        if (valid && (!length || length > value.length)) {
          $input.removeClass('invalid').addClass('valid')
        } else {
          $input.removeClass('valid').addClass('invalid')
        }
      }
    }
  }

  const handleLabelPosition = () => {
    $('body')
      .find(inputSelector)
      .removeClass('valid invalid')
      .each((index, input) => {
        const $this = $(input)
        const hasDefaultValue = !!$this.val()
        const hasPlaceholder = !!$this.attr('placeholder')
        if (hasDefaultValue || hasPlaceholder) {
          $("label[for='" + $this.attr('id') + "']")
          //$this
            //.siblings('label, i')
            .css('transition', 'none')
            .addClass('active')
        }

        if (!hasDefaultValue && !hasPlaceholder) {
          //$this.siblings('label, i').removeClass('active')
          $("label[for='" + $this.attr('id') + "']").removeClass('active')
          handleLabelWidth($this)
        }
      })
  }

  $(window).resize(function() {
    $(inputSelector).each((index, input) => {
      let $this = $(input)
      handleLabelWidth($this)
    })
  })

  handleLabelPosition()

  $(document).on('changed.bs.form-control', handleLabelPosition)

})
