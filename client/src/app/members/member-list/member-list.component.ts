import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit, OnDestroy {
  members: Member[];
  membersSubcription: Subscription;

  constructor(private memberService: MembersService) {}
  ngOnDestroy(): void {
    this.membersSubcription?.unsubscribe();
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.membersSubcription = this.memberService.getMembers().subscribe({
      next: (loadedMembers) => (this.members = loadedMembers),
    });
  }
}
