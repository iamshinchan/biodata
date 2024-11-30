import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biodata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biodata.component.html',
  styleUrl: './biodata.component.scss'
})
export class BiodataComponent {
  activatedRoute = inject(ActivatedRoute);
  lang: string = 'marathi';
  ganeshay:any = {  
    english: 'Shree Ganeshaya Namaha',
    marathi: 'श्री गणेशाय नम:'
  }
  title:any = {
    english: 'Biodata',
    marathi: 'बायोडेटा'
  }
  biodata: any = {
    english: {
      "personal_information": {
        "full_name": "Vikram Dhanraj Ramekar",
        "date_of_birth": "08/12/1995 11:10pm",
        "rashi": "Mithun (Gemini)",
        "nakshatra": "Ardra",
        "place_of_birth": "Pune",
        "gotra": "Vashishta",
        "height": "5.7 Feet",
        "blood_group": "B+",
        "marital_status": "Single",
        "complexion": "Fair",
        "education": "BE Computer Science (D. Y Patil College, Pimpri, Pune)",
        "occupation": "Senior Software Engineer in MNC",
        "caste": "Sutar (OBC)"
      },
      "family_details": {
        "father": "Dhanraj Sheshrao Ramekar (Retired, Tech M)",
        "mother": "Nirmala Dhanraj Ramekar (Housewife)",
        "siblings": [
          "1 younger brother (Aditya Dhanraj Ramekar)"
        ],
        "maternal_uncle": "Prakash Shivdas Dighekar (Amravati)",
        "native_place": "Amravati"
      },
      "contact_details": {
        "address": "Devrai 7, flat no. 503, Ambegaon Kh. Near Swami Narayan Temple, Pune 411046.",
        "contact_no": "9689928114"
      }
    },
    marathi: {
      "व्यक्तिगत_तपशील": {
        "पूर्ण_नाव": "विक्रम धनराज रामेकर",
        "जन्मतारीख": "०८/१२/१९९५ रात्री ११:१० वाजता",
        "राशी": "मिथुन",
        "नक्षत्र": "आर्द्रा",
        "जन्म_ठिकाण": "पुणे",
        "गोत्र": "वशिष्ठ",
        "उंची": "५.७ फूट",
        "रक्त_गट": "B+",
        "वैवाहिक_स्थिती": "अविवाहित",
        "रंग": "गोरा",
        "शिक्षण": "बीई कॉम्प्युटर सायन्स (डी. वाय पाटील कॉलेज, पिंपरी, पुणे)",
        "व्यवसाय": "MNC मध्ये वरिष्ठ सॉफ्टवेअर अभियंता",
        "जात": "सुतार (ओबीसी)"
      },
      "कौटुंबिक_तपशील": {
        "वडील": "धनराज शेषराव रामेकर (निवृत्त, टेक महिंद्रा)",
        "आई": "निर्मला धनराज रामेकर (गृहिणी)",
        "भावंडे": [
          "१ लहान भाऊ (आदित्य धनराज रामेकर)"
        ],
        "मामा": "प्रकाश शिवदास दिघेकर (अमरावती)",
        "मूळ_ठिकाण": "अमरावती"
      },
      "संपर्क_तपशील": {
        "पत्ता": "देवराई ७, फ्लॅट क्र. 503, आंबेगाव खु., स्वामी नारायण मंदिर जवळ, पुणे ४१११०४६.",
        "संपर्क_क्रमांक": "९६८९९२८११४"
      }
    }


  };
  ngOnInit() {
    this.lang = this.activatedRoute.snapshot.url[0].path;
  }
  getObjectArr(obj: any): any {
    return Object.keys(obj);
  }
  formatStr(str: string) {
    return str.replaceAll(new RegExp("_", "g"), " ");
  }
}
